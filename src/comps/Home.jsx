import React, { useState, useEffect, useLayoutEffect } from 'react';
import Nav from './Nav';
import Bets from './Bets'
import Loading from './Loading';
import axios from 'axios';
import Graph from './Graph';
import SideCar from './SideCar';
import Tabs from './Tabs';
import { connect } from "react-redux";
import { fetchBets } from '../actions/betsAction';

function Home(props) {
    const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));
    const [isLoading, setIsLoading] = useState(true);





    // console.log(props.sport);

    // let bets = localStorage.getItem('bet_list');
    // bets = JSON.parse(bets)

    // useLayoutEffect(() => {
    //     const getBets = async () => {
    //         try {
    //             const res = await axios.get(`http://localhost:8080/bets/${props.sport}/${user.id}`);
    //             console.log(res.data, 'hello')
    //             console.log(props.sport, 'sport call')
    //             localStorage.setItem('bet_list', JSON.stringify(res.data))
    //             props.setBetState(bets)
    //             setIsLoading(false)
    //         } catch (err) {
    //             console.log(err)
    //         }

    //     }
    //     getBets()

    //     axios
    //         .get(`http://localhost:8080/bets/all/${user.id}`)
    //         .then(res => {
    //             console.log(res.data, 'hello')
    //             localStorage.setItem('bet_list', JSON.stringify(res.data))
    //             props.setBetState(bets)
    //             setIsLoading(false)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])
    // console.log(props.sport, 'sport update')
    let user = localStorage.getItem("user_data");
    user = JSON.parse(user);
    useEffect(() => {
        props.fetchBets(user.id, props.sport);
    }, []);
    console.log(props.bets)






    return (
        <div className="home-wrapper">
            <SideCar />

            <div className='content'>
                <Nav signedIn={signedIn} />
                <div className="dashboard">
                    {props.isLoading && (
                        <Loading />
                    )}
                    <div>

                        {!props.isLoading && (
                            <>
                                <Tabs tabs={props.tabs} setTabs={props.setItemsetTabs} activeHandler={props.activeHandler} active={props.active} setActive={props.setActive} />
                                <Graph />
                                <div>
                                    <h3 style={{ fontSize: '2rem' }}>Your bets</h3>
                                    <div className="bets_wrapper">
                                        {props.bets.map((bet, id) => (
                                            <div className='bets' key={id}>
                                                <p>{bet.opponent1} vs {bet.opponent2}</p>
                                                <p>Result: {bet.win_loss} </p>
                                            </div>
                                        ))}
                                    </div>
                                </div >
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bets: state.bets,
        isLoading: state.isLoading,
        error: state.error,
    };
}

const mapDispatchToProps = {
    fetchBets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);