export interface ICardStyles {
  isActive: boolean;
}

export interface ICardTaskCountProps {
  onChange: (type: CardStateProps) => void;
}

export type CardStateProps = 'active' | 'ongoing' | 'done' | null;
