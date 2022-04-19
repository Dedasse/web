import React, {useEffect, useState} from "react";
import {LeafPoll, Result} from 'react-leaf-polls'
import axios from "axios";
import 'react-leaf-polls/dist/index.css'
import {ReactNotifications, Store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


export default function ScreenThree() {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [loading, setLoading] = useState(false)
    const [resDataArray, setResDataArray] = useState([
        {poll: [{id: 0, text: 'Yes', votes: 0}, {id: 0,text: 'N0', votes: 0}], question: ""}
    ])

    useEffect(() => {
        console.log("use-effect")
        fetchPolls();

    }, [])

    const fetchPolls = async () => {
        setLoading(true)
        const newResArray = []
        axios.post(serverUrl + 'loadpollvote').then(res => {
            res.data.forEach((element) => {
                newResArray.push({
                    poll: [{id: element.id,text: 'Yes', votes: element.likes}, {id: element.id, text: 'No', votes: element.dislikes}],
                    question: element.question
                })

            })
            setResDataArray(newResArray)
        })
        setLoading(false)
    }

    const pollTheme = {
        textColor: '#19181f',
        mainColor: '#00B87B',
        backgroundColor: 'white',
        alignment: 'center',
        leftColor: '#00B87B',
        rightColor: '#FF2E00'
    }

    function handleVote(item: Result) {
        if (item.text === "No"){
            console.log("voted no on id " + item.id)
            axios.post(serverUrl + 'api/vote/dislike', {
                id: item.id
            }).then((response) => {
                if (response.status === 200) {
                    console.log("Dislike success")

                    Store.addNotification({
                        message: "Disliked",
                        type: "success",
                        insert: "top",
                        container: "bottom-center",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 2000,
                            onScreen: true
                        }
                    });
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

        } else if (item.text === "Yes"){
            axios.post(serverUrl +'api/vote/like', {
                id: item.id
            }).then((response) => {
                if (response.status === 200) {
                    console.log("Like success")
                    Store.addNotification({
                        message: "Liked",
                        type: "success",
                        insert: "top",
                        container: "bottom-center",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 2000,
                            onScreen: true
                        }
                    });
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
                margin: '300px auto',
                width: '500px'
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