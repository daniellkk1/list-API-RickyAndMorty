import React from "react";
import { Routes, Route } from "react-router-dom";
import Peoplecard from "../components/peopleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import NavBar from "../components/navbar";

export const Rotas = () => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        getPeople()
    }, [])
    
    
    const getPeople = () => {
        var endPoints = []
        for( var i = 0;i < 42; i++ ){
            endPoints.push(`https://rickandmortyapi.com/api/character?page=${i}`)
        }

        
        // axios.all(endPoints.map(endpont => axios.get(endpont)))
        // .then(res => setPeople(res))

        // .catch(error => {
        //     console.log(error.message)
        // })

        // console.log(people)
        
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
            setPeople(response.data.results)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

     const filterPeople = (name) => {
        var filteredPeople = []
        if(name===""){
            getPeople()
        }
        for ( var i in people){
            if (people[i].name.includes(name)){
                filteredPeople.push(people[i]);
            }
        }
       
        setPeople(filteredPeople)
    }


    return(

        <Routes>
            <Route element={
                <> 
                <NavBar filterPeople={filterPeople}/>
                    <Container maxWidth='false'>
                        <Grid container>
                            {people.map((item, key) => {
                                return(
                                    <Grid item xs={3} key={key}>
                                        <Peoplecard  
                                            name={item.name}
                                            image={item.image}
                                            species={item.species}
                                            location={item.location.name}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Container>
                </>
            
            } path="/"></Route>
        </Routes>
        
    )
}