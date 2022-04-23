import {CircleMenu, CircleMenuItem, TooltipPlacement} from "react-circular-menu";
import ReactCircleModal from "react-circle-modal";
import {AiOutlinePlusCircle} from "react-icons/ai";
import React, {useState} from "react";
import axios from "axios";
import {Store} from "react-notifications-component";
import {useHistory} from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const PlusButton = () => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [question, setQuestion] = useState("");
    const [title, setTitle] = useState("");
    const [newsText, setNewsText] = useState("");
    const [isPinned, setIsPinned] = useState(false)
    const history = useHistory();

    function handleSubmit(event) {
        console.log("axios")
        event.preventDefault();
        axios.post(serverUrl + "api/createnews", {
            title: title,
            newsText: newsText,
            isPinned: isPinned
        }, {
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                Store.addNotification({
                    message: "News added",
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
                history.push("/");

            }
            console.log("incoming response..")
            console.log(response);
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
                    duration: 5000,
                    onScreen: true
                }
            });
        });
    }
    function CreatePoll(event) {
        console.log("axios")
        event.preventDefault();
        axios.post(serverUrl + "api/createpoll", {
            question: question,
        }, {
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                Store.addNotification({
                    message: "Poll created",
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
                history.push("/");

            }
            console.log("incoming response..")
            console.log(response);
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
                    duration: 5000,
                    onScreen: true
                }
            });
        });

    }


    return (
        <div className="circular_menu" style={{
            width: "100%",
            marginLeft: "300px"
        }}>
            <CircleMenu
                startAngle={180}
                rotationAngle={360}
                itemSize={5}
                radius={10}
                rotationAngleInclusive={false}>
                <CircleMenuItem
                    tooltip="New poll"
                    tooltipPlacement={TooltipPlacement.Right}
                > <ReactCircleModal
                    backgroundColor="#E0E0E0"
                    toogleComponent={onClick => (
                        <AiOutlinePlusCircle size={"100%"} onClick={onClick}>
                            Create new poll
                        </AiOutlinePlusCircle>
                    )}
                    offsetX={0}
                    offsetY={0}>
                    {(onClick) => (
                        <div style={{padding: '1em'}}>
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <form onSubmit={CreatePoll}>
                                        <h3>New poll</h3>
                                        <div className="form-group">
                                            <label>Question</label>
                                            <input onChange={(e) => setQuestion(e.target.value)}
                                                   className="form-control" placeholder="Write question here"/>
                                        </div>
                                        <p></p>
                                        <button type="submit" className="btn btn-primary btn-block">Create question
                                        </button>
                                        <button style={{
                                            float: "right"
                                        }} type="button" onClick={onClick} className="btn btn-danger  ">Cancel
                                        </button>
                                    </form>
                                </div>

                            </div>

                        </div>
                    )}
                </ReactCircleModal>
                </CircleMenuItem>
                <CircleMenuItem
                    tooltip="New notification"
                    tooltipPlacement={TooltipPlacement.Right}
                > <ReactCircleModal
                    backgroundColor="#E0E0E0"
                    toogleComponent={onClick => (
                        <AiOutlinePlusCircle size={"100%"} onClick={onClick}>
                            Create new notification
                        </AiOutlinePlusCircle>
                    )}
                    offsetX={0}
                    offsetY={0}>
                    {(onClick) => (
                        <div style={{padding: '1em'}}>
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <form onSubmit={handleSubmit}>
                                        <h3>New notification</h3>
                                        <div className="form-group">
                                                <BootstrapSwitchButton
                                                    width={200}
                                                    checked={isPinned}
                                                    onlabel='Pinned'
                                                    offlabel='Not pinned'
                                                    onChange={(checked: boolean) => {
                                                        setIsPinned(checked)
                                                    }}
                                                />
                                            <p></p>
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input onChange={(e) => setTitle(e.target.value)}
                                                       className="form-control" placeholder="Notification title"/>
                                            </div>
                                            <label>Notification</label>
                                            <textarea rows={5} onChange={(e) => setNewsText(e.target.value)}
                                                   className="form-control" placeholder="Write story here"/>
                                        </div>
                                        <p></p>
                                        <button type="submit" className="btn btn-primary btn-block">Create
                                            notification
                                        </button>
                                        <button style={{
                                            float: "right"
                                        }} type="button" onClick={onClick} className="btn btn-danger  ">Cancel
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </ReactCircleModal>
                </CircleMenuItem>
            </CircleMenu>

        </div>
    )
}
export default PlusButton