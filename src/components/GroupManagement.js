import React, {useEffect, useState} from 'react';
import CreateCard from "./CreateCard";
import GroupCard from "./GroupCard";
import CreateGroup from "./CreateGroup";

const GroupManagement = ({}) => {

    const [images, setImages, deps, setDeps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`http://20.44.213.195:7443/api/bookmarks/groupCardsBy?groupBy=GROUP_NAME`)
            .then(res => res.json())
            .then(data => {
                setImages(data.groupCardDetails);
                console.log("API return value is", images)

                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [term]);

    let addModalClose = () => setShowModal(false);

    let refreshPage = () => {
        setShowModal(false);
        //window.location.reload(false);
    }
    return (
        <div className="container mx-auto">
            <>
                <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{transition: "all .15s ease"}}
                    onClick={() => setShowModal(true)}
                >
                    Create Group
                </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            // onClick={() => setShowModal(false)}
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div
                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div
                                        className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Create New Group
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <CreateGroup/>
                                    </div>
                                    {/*footer*/}
                                    <div
                                        className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{transition: "all .15s ease"}}
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>

            {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

            <div className="grid grid-cols-3 gap-4">
                {/*iterate the objects from backend and create tiles of Image Card*/}
                {Object.keys(images).map(image => (
                    <GroupCard key={image.id} image={image}/>
                ))}

            </div>


        </div>
    );
}

export default GroupManagement;