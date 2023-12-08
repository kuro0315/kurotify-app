import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function NextPlayings() {
    const accordionData = [
        { title: 'Accordion 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
        { title: 'Accordion 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
        { title: 'Accordion 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
        { title: 'Accordion 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
        { title: 'Accordion 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
        { title: 'Accordion 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    ];

    return (
        <div>
            {accordionData.map((data, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography>{data.title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>{data.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}