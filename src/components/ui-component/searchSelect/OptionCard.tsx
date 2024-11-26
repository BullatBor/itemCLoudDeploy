'use client'
import { Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import { FC } from "react";
import { IProductInfo } from "types/product";

export const OptionCard: FC<IProductInfo> = ({ name, brand, description, image }) => {
    return (
        <>
            <Grid container >
                <Grid item xs={2}>
                    <img width='100%' height='auto' src={image || ''} alt={name || 'shoes'} />
                </Grid>
                <Grid item xs={10} sx={{ pl: { xs: '8px', sm: '10px' } }}>
                    <Stack display='flex' justifyContent='start' flexDirection='column'>
                        <Typography sx={{ fontSize: { xs: '10px', sm: '14px', md: '16px' } }} fontWeight={500}>{name}</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', sm: '14px', md: '16px' } }} fontWeight={400}>{description}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}