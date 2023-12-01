import Button from '@mui/material/Button';

interface BasicButtonProps {
    buttonText: string;
    buttonVariant: 'text' | 'outlined' | 'contained'; // Ajoutez les types de variant possibles ici
    onClick: () => void; 
    buttonColor: 'primary' | 'secondary';
}

export function BasicButton(props: BasicButtonProps) {
    return (
        <>
            <Button variant={props.buttonVariant} color={props.buttonColor} onClick={props.onClick}>
                {props.buttonText}
            </Button>
        </>
    );
}
