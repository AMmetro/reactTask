import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
        marginLeft: 50,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider(props:any) {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([20, 37]);



    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        props.onChangeRange(newValue as number[])
        // console.log(newValue as number[])
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Temperature range
            </Typography>
            <Slider
                min={20}
                disabled={false}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
