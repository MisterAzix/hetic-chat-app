import Button from '@mui/material/Button';

interface BasicButtonProps {
    buttonText: string;
    onClick: () => void; 
}

export function BasicButton(props: BasicButtonProps) {
    return (
        <>
            <Button variant="contained" onClick={props.onClick}>
                {props.buttonText}
            </Button>
        </>
    );
}
