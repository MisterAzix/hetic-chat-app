import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface BasicButtonProps {
  buttonText?: string;
  buttonVariant: 'text' | 'outlined' | 'contained';
  onClick: () => void;
  buttonColor: 'primary' | 'secondary';
  chat: 'yes' | 'no';
  disabled?: boolean;
}

export function BasicButton(props: BasicButtonProps) {
  const { buttonText, buttonVariant, onClick, buttonColor, chat, disabled } =
    props;

  const buttonContent = chat === 'yes' ? <SendIcon /> : buttonText;

  return (
    <Button
      variant={buttonVariant}
      onClick={onClick}
      sx={{ color: { buttonColor } }}
      disabled={disabled}
    >
      {buttonContent}
    </Button>
  );
}
