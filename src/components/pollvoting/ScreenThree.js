import React, {useEffect, useState} from "react";
import {LeafPoll, Result} from 'react-leaf-polls'
import axios from "axios";
import 'react-leaf-polls/dist/index.css'
import {Store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {useCookies} from "react-cookie";
import { color } from "@mui/system";


export default function ScreenThree() {

    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [loading, setLoading] = useState(false)
    const [cookies] = useCookies(['currentUser']);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [resDataArray, setResDataArray] = useState([
        {poll: [{id: 0, text: 'Yes', votes: 0}, {id: 0, text: 'N0', votes: 0}], question: ""}
    ])

    useEffect(() => {
        console.log("use-effect")
        window.scrollTo(0, 100)
        try {
            if (cookies.currentUser.privilege == null) {
                setIsLoggedIn(false)
            } else {
                setIsLoggedIn(true)
            }
        } catch (error) {
            setIsLoggedIn(false)
        }
        fetchPolls();

    }, [])

    const fetchPolls = async () => {
        setLoading(true)
        const newResArray = []
        axios.post(serverUrl + 'loadpollvote').then(res => {
            res.data.forEach((element) => {
                newResArray.push({
                    poll: [{id: element.id, text: 'Yes', votes: element.likes}, {
                        id: element.id,
                        text: 'No',
                        votes: element.dislikes
                    }],
                    question: element.question
                })

            })
            setResDataArray(newResArray)
        })
        setLoading(false)
    }

    const pollTheme = {
        textColor: '#aaa;',
        mainColor: '#7579ff',
        backgroundColor: 'white',
        alignment: 'center',
        leftColor: '#7579ff',
        rightColor: '#d000ff'
    }

    function deletePoll(pollId) {
        console.log("deleting poll-id " + pollId)
        axios.delete(serverUrl + 'api/vote/delete', {
            data: {id: pollId}

        }).then((response) => {
                if (response.status === 200) {
                    console.log("Poll delete success")
                    fetchPolls()
                }
            }, (error) => {
                console.log("error " + error);
            }
        )
    }

    function handleVote(item: Result) {
        if (item.text === "No") {
            console.log("voted no on id " + item.id)
            axios.post(serverUrl + 'api/vote/dislike', {
                id: item.id
            }).then((response) => {
                if (response.status === 200) {
                    console.log("Dislike success");
                }
            }, (error) => {
                console.log("error " + error)
                Store.addNotification({
                    message: error.toString(),
                    type: "danger",
                    insert: "top",
                    container: "bottom-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 1500,
                        onScreen: true
                    }
                });
            });

        } else if (item.text === "Yes") {
            axios.post(serverUrl + 'api/vote/like', {
                id: item.id
            }).then((response) => {
                if (response.status === 200) {
                    console.log("Like success")
                }

            }, (error) => {
                console.log("error " + error)
                Store.addNotification({
                    message: error.toString(),
                    type: "danger",
                    insert: "top",
                    container: "bottom-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                });
            });
            console.log("Voted yes on item " + item.id)
        }

        setTimeout(
            function () {
                console.log("upd")
                fetchPolls()
            }, 3000
        )
    }

    if (!loading) {
        const elementArray = resDataArray.map((element) =>
            isLoggedIn ? (
                    <div>
                        <LeafPoll
                            type='multiple'
                            question={element.question}
                            results={element.poll}
                            theme={pollTheme}
                            onVote={handleVote}
                        />
                        <button onClick={() => deletePoll(element.poll[0].id)} type="button"
                                className="btn btn-danger">Delete poll
                        </button>
                    </div>
                ) :
                <div>
                    <LeafPoll
                        type='multiple'
                        question={element.question}
                        results={element.poll}
                        theme={pollTheme}
                        onVote={handleVote}
                    />
                </div>
        )
        return (
            <div style={{
                paddingBottom: '200px',
                margin: 'auto',
                width: '500px',
                marginTop: '20px'
                
            }}>
                {elementArray}
            </div>
        )
    } else {
        return (
            <p> loading</p>
        )
    }
}