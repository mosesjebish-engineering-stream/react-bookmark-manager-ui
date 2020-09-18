import React, {useState} from 'react';
import CardManagement from "./CardManagement";

const GroupCard = ({image}) => {

    const [showModal, setShowModal] = useState(true);

    let addModalClose = () => setShowModal(false);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {showModal?
                (<div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        {image}
                    </div>
                    <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => setShowModal(false)}
                    >
                        Detail ->
                    </button>
                </div>) :
                <CardManagement/>
            }
        </div>
    )
}

export default GroupCard;
