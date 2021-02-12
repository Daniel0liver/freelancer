export interface ICardStyles {
  isActive: boolean;
}

export interface ICardProps {
  onChange: (type: CardStateProps) => void;
}

export type CardStateProps = 'active' | 'ongoing' | 'done';
