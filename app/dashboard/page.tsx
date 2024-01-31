'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import PieChart from '../components/PieChart';

interface UserData {
  age: string;
  weight: string;
  fitnessGoal: string;
  activityLevel: string;
  dietPreference: string;
  healthCondition: string;
}

const DashboardPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);


  const calculateWorkoutRecommendations = (userData: UserData) => {
    let scores = {
      cardio: 0,
      strengthTraining: 0,
      flexibility: 0,
      balance: 0,
    };
  

    const age = parseInt(userData.age, 10);
  

    scores.cardio = age < 30 ? 30 : 20;
    scores.strengthTraining = userData.fitnessGoal === 'muscleGain' ? 40 : 20;
    scores.flexibility = userData.dietPreference === 'vegan' ? 30 : 20;
    scores.balance = userData.healthCondition === 'hypertension' ? 30 : 20;
  

    let totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    (Object.keys(scores) as (keyof typeof scores)[]).forEach(key => {
      scores[key] = (scores[key] / totalScore) * 100;
    });
  
    return scores;
  };
  


  let pieChartData = {
    labels: ['Cardio', 'Strength Training', 'Flexibility', 'Balance'],
    datasets: [
      {
        label: 'Recommended Workout Distribution',
        data: [0, 0, 0, 0], 
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };
  if (userData) {
    const workoutScores = calculateWorkoutRecommendations(userData);
    pieChartData.datasets[0].data = [workoutScores.cardio, workoutScores.strengthTraining, workoutScores.flexibility, workoutScores.balance];
  }
  

  return (
    <div>
    <NavBar />
    <div className="pl-9 pt-16">
      {userData && (
        <PieChart
          data={pieChartData}
        />
      )}
    </div>
  </div>


  );
};

export default DashboardPage;
