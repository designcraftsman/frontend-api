import PropTypes from 'prop-types';
import { groupShape } from '../types/types.js';
import defaultGroupProfile from '../assets/group-profiles/group.png';
import { useEffect } from 'react';
function Groups({ groups }) {

    const changeExploreToMakeGroup = () => {
        let exploreBtn = document.querySelector(".explore-button");
        if (exploreBtn) {
            exploreBtn.textContent = "Make a new group";
            exploreBtn.setAttribute("href", "make-group");
        }
    };

    useEffect(() => {
        changeExploreToMakeGroup();
    }, []);

    return (
        <div   className="groups">
            <h4   className="mt-2">Groups</h4>
            {groups.map(group => (
                <div key={group.id}   className="group rounded shadow small-scale-on-hover mt-2">
                    <a href={`./group-chat/${group.id}`}>
                        <div   className="d-flex flex-row justify-content-between">
                            <div   className="d-flex flex-row">
                                <img   className="group-profile me-2" src={group.profile || defaultGroupProfile} alt="group profile" />
                                <div   className="d-flex flex-column ml-2">
                                    <div   className="group-name">{group.name}</div>
                                    <div   className="group-last-msg">{group.chat[0].message}</div>
                                </div>
                            </div>
                            <div   className="group-last-msg-time mt-4">{group.chat[0].time}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

Groups.propTypes = {
    groups: PropTypes.arrayOf(groupShape).isRequired,
};

export default Groups;
