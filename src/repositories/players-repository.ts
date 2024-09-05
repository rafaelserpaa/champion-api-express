import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-mode";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 92,
      Passing: 91,
      Dribbling: 96,
      Defending: 35,
      Physical: 68
    }
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 88,
      Shooting: 94,
      Passing: 82,
      Dribbling: 85,
      Defending: 40,
      Physical: 78
    }
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 97,
      Shooting: 88,
      Passing: 80,
      Dribbling: 92,
      Defending: 39,
      Physical: 76
    }
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 94,
      Dribbling: 88,
      Defending: 64,
      Physical: 78
    }
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 78,
      Shooting: 92,
      Passing: 79,
      Dribbling: 86,
      Defending: 44,
      Physical: 82
    }
  },
  {
    id: 6,
    name: "Neymar Jr",
    club: "Al Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 85,
      Shooting: 83,
      Passing: 87,
      Dribbling: 92,
      Defending: 37,
      Physical: 61
    }
  },
  {
    id: 7,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 71,
      Shooting: 60,
      Passing: 71,
      Dribbling: 72,
      Defending: 91,
      Physical: 86
    }
  },
  {
    id: 8,
    name: "Thibaut Courtois",
    club: "Real Madrid",
    nationality: "Belgium",
    position: "Goalkeeper",
    statistics: {
      Overall: 90,
      Pace: 45,
      Shooting: 25,
      Passing: 48,
      Dribbling: 43,
      Defending: 15,
      Physical: 78
    }
  },
  {
    id: 9,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 69,
      Shooting: 72,
      Passing: 89,
      Dribbling: 84,
      Defending: 84,
      Physical: 79
    }
  },
  {
    id: 10,
    name: "Sadio Mané",
    club: "Al Nassr",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 91,
      Shooting: 83,
      Passing: 80,
      Dribbling: 88,
      Defending: 44,
      Physical: 77
    }
  },
  {
    id: 11,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 94,
      Shooting: 87,
      Passing: 81,
      Dribbling: 89,
      Defending: 45,
      Physical: 75
    }
  },
  {
    id: 12,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 90,
      Shooting: 93,
      Passing: 65,
      Dribbling: 80,
      Defending: 45,
      Physical: 88
    }
  },
  {
    id: 13,
    name: "Luka Modric",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 70,
      Shooting: 78,
      Passing: 89,
      Dribbling: 88,
      Defending: 73,
      Physical: 65
    }
  },
  {
    id: 14,
    name: "Karim Benzema",
    club: "Al Ittihad",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 78,
      Shooting: 90,
      Passing: 83,
      Dribbling: 87,
      Defending: 40,
      Physical: 78
    }
  },
  {
    id: 15,
    name: "Casemiro",
    club: "Manchester United",
    nationality: "Brazil",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 63,
      Shooting: 73,
      Passing: 75,
      Dribbling: 75,
      Defending: 90,
      Physical: 87
    }
  },
  {
    id: 16,
    name: "Trent Alexander-Arnold",
    club: "Liverpool",
    nationality: "England",
    position: "Defender",
    statistics: {
      Overall: 87,
      Pace: 80,
      Shooting: 65,
      Passing: 89,
      Dribbling: 80,
      Defending: 80,
      Physical: 70
    }
  },
  {
    id: 17,
    name: "Gianluigi Donnarumma",
    club: "Paris Saint-Germain",
    nationality: "Italy",
    position: "Goalkeeper",
    statistics: {
      Overall: 88,
      Pace: 52,
      Shooting: 25,
      Passing: 45,
      Dribbling: 45,
      Defending: 10,
      Physical: 80
    }
  },
  {
    id: 18,
    name: "Pedri",
    club: "Barcelona",
    nationality: "Spain",
    position: "Midfielder",
    statistics: {
      Overall: 85,
      Pace: 78,
      Shooting: 70,
      Passing: 85,
      Dribbling: 88,
      Defending: 70,
      Physical: 68
    }
  },
  {
    id: 19,
    name: "Rúben Dias",
    club: "Manchester City",
    nationality: "Portugal",
    position: "Defender",
    statistics: {
      Overall: 88,
      Pace: 68,
      Shooting: 50,
      Passing: 70,
      Dribbling: 60,
      Defending: 89,
      Physical: 85
    }
  },
  {
    id: 20,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 86,
      Pace: 82,
      Shooting: 75,
      Passing: 81,
      Dribbling: 84,
      Defending: 78,
      Physical: 79
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id:number): Promise<PlayerModel | undefined> => {
    return database.find( player => player.id === id);
};

export const inserPlayer = async (player:PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id:number) => {
  const index = database.findIndex((p) => p.id === id);

  if (index !== -1){
    database.splice(index, 1);
    return true
  }
  return false
};

export const findAndModifyPlayer = async (id:number,statistics:statisticsModel) => {
  
  const playerIndex = database.findIndex(player => player.id === id)

  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics
  }

  return database[playerIndex];
};
