import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { firestore } from '../firebaseConfig';
import { collection, QuerySnapshot, DocumentData, onSnapshot, addDoc } from 'firebase/firestore';

interface Finance {
  id: string;
  type: 'despesa' | 'receita' | 'orçamento' | 'meta';
  amount: number;
  date: string;
}

interface FinancesContextType {
  finances: Finance[];
  addFinance: (finance: Omit<Finance, 'id'>) => void;
}

interface FinancesProviderProps {
  children: ReactNode;
}

const FinancesContext = createContext<FinancesContextType | undefined>(undefined);

export const useFinances = () => {
  const context = useContext(FinancesContext);
  if (!context) {
    throw new Error('useFinances must be used within a FinancesProvider');
  }
  return context;
};

export const FinancesProvider: React.FC<FinancesProviderProps> = ({ children }) => {
  const [finances, setFinances] = useState<Finance[]>([]);

  useEffect(() => {
    const financeCollection = collection(firestore, 'finances');
    const unsubscribe = onSnapshot(financeCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      const financesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Finance[];
      setFinances(financesData);
    });

    return unsubscribe;
  }, []);

  const addFinance = async (finance: Omit<Finance, 'id'>) => {
    try {
      const financeCollection = collection(firestore, 'finances');
      await addDoc(financeCollection, finance);
    } catch (error) {
      console.error('Error adding finance:', error);
    }
  };
  

  return (
    <FinancesContext.Provider value={{ finances, addFinance }}>
      {children}
    </FinancesContext.Provider>
  );
};
