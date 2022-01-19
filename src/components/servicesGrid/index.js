import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../gridItem';



const useStyles = makeStyles(() => ({
        gridContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingInline: '2rem',
        }
}))

function ServicesGrid() {
        const classes = useStyles();



        const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dignissimos ratione voluptatibus quasi fuga iusto numquam. Praesentium, explicabo tempora itaque sunt reprehenderit repellendus, vel excepturi eius fugiat exercitationem maiores adipisci minus unde voluptatibus autem consequuntur necessitatibus! Vitae quidem aspernatur voluptatum quia odio voluptatem incidunt iusto placeat, delectus sit consequuntur qui sapiente illo consectetur laudantium expedita eos vero quaerat totam? Rerum inventore amet.`

        return (
                <div className={classes.gridContainer}>
                        <GridItem img="./assets/services-1.png" alt="Foto de um notebook em cima de uma mesa" title="Websites and" paragraph={lorem} direction="ltr" buttonText="Websites and e-commerce" bold="e-commerce" />
                        <GridItem img="./assets/services-2.png" alt="Icone de Lupa" title="Search Engine Optimization" paragraph={lorem}  direction="rtl" buttonText="Check the offer!" bold="SEO" />
                        <GridItem img="./assets/services-3.png" alt="Icone de Ferramentas" title="PPC"paragraph={lorem}  direction="ltr" buttonText="Websites and e-commerce" bold="Google Advertising" />
                        <GridItem img="./assets/services-4.png" alt="Icone de Pássaro do Twitter" title="Social" paragraph={lorem}  direction="rtl" buttonText="Check the offer!" bold="Media" />
                        <GridItem img="./assets/services-5.png" alt="Icone de Pessoas com engrenagem na frente" title="Conversion Optimization" paragraph={lorem}  direction="ltr" buttonText="Websites and e-commerce"  bold="CRO" />
                        <GridItem img="./assets/services-6.png" alt="Icone de Video" title="Video" paragraph={lorem} direction="rtl" buttonText="Check the offer!" bold="Production"  />
                </div>
        )
}

export default ServicesGrid
