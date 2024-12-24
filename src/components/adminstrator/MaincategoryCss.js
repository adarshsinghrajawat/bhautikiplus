import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //background: "linear-gradient(135deg, rgba(44, 58, 71, 1) 0%, rgba(67, 130, 200, 1) 100%)",
        height: '80vh',
        width: '65vw',
        overflow: 'hidden',
        padding: '20px',
    },

    box: {
        padding: 40,
        margin: 20,
        background: "linear-gradient(90deg, rgba(177,219,231,1) 32%, rgba(212,235,240,1) 70%, rgba(217,179,84,1) 94%)",
        width: '100%',
        maxWidth: 900,
        borderRadius: 20,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
        },
    },

    headingStyle: {
        fontWeight: 'bold',
        fontSize: 36,
        fontFamily: 'Poppins, sans-serif',
        color: '#2c3e50',
        letterSpacing: 2,
        marginBottom: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
    },

    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    textField: {
        width: '100%',
        marginBottom: 30,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3498db',
            },
            '&:hover fieldset': {
                borderColor: '#2980b9',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#2980b9',
            },
        },
    },

    button: {
        fontSize: '1.2rem',
        padding: '12px 24px',
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#3498db',
        color: '#fff',
        borderRadius: 10,
        '&:hover': {
            backgroundColor: '#2980b9',
        },
    },

    resetButton: {
        fontSize: '1.2rem',
        padding: '12px 24px',
        width: '100%',
        marginTop: 10,
        backgroundColor: '#e74c3c',
        color: '#fff',
        borderRadius: 10,
        '&:hover': {
            backgroundColor: '#c0392b',
        },
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 10,
        border: '5px solid #3498db',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        },
    },
}));
