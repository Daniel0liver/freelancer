export interface ICardStyles {
  isActive: boolean;
}

export interface ICardTaskCountProps {
  onChange: (type: CardStateProps) => void;
  activeLength: number;
  ongoingLength: number;
  doneLength: number;
}

export type CardStateProps = 'active' | 'ongoing' | 'done' | null;
