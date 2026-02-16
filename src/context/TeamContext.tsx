'use client';

import React, { createContext, useContext, useState } from 'react';

interface TeamContextType {
  selectedTeamId: string;
  setSelectedTeamId: (teamId: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [selectedTeamId, setSelectedTeamId] = useState<string>('');

  return (
    <TeamContext.Provider value={{ selectedTeamId, setSelectedTeamId }}>
      {children}
    </TeamContext.Provider>
  );
}

export function useTeamContext() {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeamContext must be used within TeamProvider');
  }
  return context;
}
