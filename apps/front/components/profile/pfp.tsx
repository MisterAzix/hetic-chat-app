import Avatar from '@mui/material/Avatar';

interface CombinedAvatarProps {
    name: string; 
    src?: string; 
    alt?: string; 
}

function stringToColor(string: string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1] ? name.split(' ')[1][0] : ''}`,
    };
}

export default function AvatarComponent({ name, src, alt }: CombinedAvatarProps) {
    if (src) {
        return <Avatar alt={alt} src={src} />;
    }
    return <Avatar alt={alt} {...stringAvatar(name)} />;
}
