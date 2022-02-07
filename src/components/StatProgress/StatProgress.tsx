import React, { useState, useEffect } from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'

interface StatProgressProps {
    name: string
    baseStat: number
}

const StatProgress = ({ name, baseStat }: StatProgressProps) => {
    const [statProgress, setStatProgress] = useState<number>(0)
    const [statNumber, setStatNumber] = useState<number>(0)

    useEffect(() => {
        const loadNumber = setInterval(() => {
            if (statNumber < baseStat)
                setStatNumber(currentStat => currentStat + 1)
        }, 10)

        return () => {
            clearInterval(loadNumber)
        }
    }, [statNumber])

    useEffect(() => {
        const loadProgress = setInterval(() => {
            const per = (baseStat / 200) * 100
            if (statProgress < per)
                setStatProgress(currentStat => currentStat + 1)
        }, 10)

        return () => {
            clearInterval(loadProgress)
        }
    }, [statProgress])

    console.log('statProgress render')

    return (
        <>
            <Box>
                <Typography
                    pr={1}
                    variant="body2"
                    fontWeight="bold"
                    sx={{ fontSize: '15px' }}
                >
                    {name}
                </Typography>
            </Box>
            <Box
                sx={{
                    height: '20px',
                }}
                display="flex"
                alignItems="center"
            >
                <Box>
                    <Typography pr={1} variant="body2">
                        {statNumber}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        height: '50%',
                    }}
                >
                    <LinearProgress
                        variant="determinate"
                        sx={{
                            widht: '100%',
                            height: '100%',
                            borderRadius: '10px',
                        }}
                        value={statProgress}
                    />
                </Box>
            </Box>
        </>
    )
}

export default StatProgress
