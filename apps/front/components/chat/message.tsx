import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface MessageProps {
    text: string;
    user: string;
    timestamp: Date;
}
export default function MessageItem(props: MessageProps) {
    const theme = useTheme();
    const messageBoxStyle = {
        bgcolor: props.user === 'user1' ? 'primary.main' : 'secondary.main', // Changer la couleur en fonction de l'utilisateur
        boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
        borderRadius: 2,
        p: 2,
        margin:2,
        minWidth: 100,
        maxWidth: 'fit-content',
        color: 'background.default',
        textAlign: props.user === 'user1' ? 'left' : 'right', 
        marginLeft: props.user === 'user1' ? 0 : 'auto', 
    };
    const formatDate = (date: Date) => {
        return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    };
    return (
        <Box sx={messageBoxStyle}>
            {props.text}
            <Box component="span" sx={{ fontSize: '0.8em', display: 'block', marginTop: 1 }}>
                {formatDate(props.timestamp)}
            </Box>
        </Box>
    )
}
