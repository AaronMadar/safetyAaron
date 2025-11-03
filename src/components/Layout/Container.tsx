import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(() => ({
    backgroundColor: '#fff',
    padding: 8,
    textAlign: 'center',
    color: '#000',
}));

type BasicGridProps = {
    contentleft?: React.ReactNode;
    contentright?: React.ReactNode;
};

export default function BasicGrid({ contentleft, contentright }: BasicGridProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid {...({ item: true, xs: 8 } as any)}>
                    <Item>size=8</Item>
                    {contentleft}
                </Grid>
                <Grid {...({ item: true, xs: 4 } as any)}>
                    <Item>size=4</Item>
                    {contentright}
                </Grid>
            </Grid>
        </Box>
    );
    }
