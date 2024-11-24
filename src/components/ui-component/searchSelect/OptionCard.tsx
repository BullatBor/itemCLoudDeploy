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
                    <img width={120} height={70} src={image || ''} alt={name || 'shoes'} />
                </Grid>
                <Grid item xs={10}>
                    <Stack display='flex' justifyContent='start' flexDirection='column'>
                        <Typography fontWeight={500}>{name}</Typography>
                        <div>{description}</div>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}