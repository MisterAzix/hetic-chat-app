import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface BasicButtonProps {
  buttonText?: string;
  buttonVariant: 'text' | 'outlined' | 'contained';
  onClick: () => void;
  buttonColor: 'primary' | 'secondary';
  chat: 'yes' | 'no';
  disabled?: boolean; // Ajout de la propriété disabled
}

export function BasicButton(props: BasicButtonProps) {
  const { buttonText, buttonVariant, onClick, buttonColor, chat, disabled } = props;

  return (
    <Button
      variant={buttonVariant}
      color={buttonColor}
      onClick={onClick}
      sx={{ color: 'white' }}
      disabled={disabled} 
    >
      {chat === 'yes' ? <SendIcon /> : buttonText}
    </Button>
  );
}
