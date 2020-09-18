import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardManagement from './components/CardManagement';
import ShortenUrl from "./components/ShortenUrl";
import GroupManagement from "./components/GroupManagement";


class App extends Component {
    render() {
        return (
            <div className="container mx-auto">

                <Tabs>
                    <TabList>

                        <Tab>All Cards</Tab>
                        <Tab>Groups</Tab>
                        <Tab>Shorten url</Tab>
                        <Tab>Task List</Tab>
                    </TabList>


                    <TabPanel>
                        <div>
                            <CardManagement/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <GroupManagement/>
                    </TabPanel>
                    <TabPanel>
                        <ShortenUrl/>
                    </TabPanel>
                    <TabPanel>
                        <h2>You can validate changes here here</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default App;
