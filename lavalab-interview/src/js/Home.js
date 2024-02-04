import Card from './Card';
import '../css/Home.css';

const apps = [
    {
        name: "Figma",
        description: "Stay up to date with your team's latest designs.",
        logo: require('../img/figma-logo.png')
    },
    {
        name: "Google Drive",
        description: "Access all of your documents and information.",
        logo: require('../img/google-drive-logo.png')
    },
    {
        name: "Slack",
        description: "Communicate seamlessly with your teammates.",
        logo: require('../img/slack-logo.png')
    },
    {
        name: "Notion",
        description: "Sync all of your notes, team docs, and other important information.",
        logo: require('../img/notion-logo.png')
    },
    {
        name: "Miro",
        description: "Unlock the power of collaboration to distill insights from data.",
        logo: require('../img/miro-logo.png')
    },
    {
        name: "Airtable",
        description: "Keep your data organized in a database-spreadsheet format.",
        logo: require('../img/airtable-logo.png')
    },
    {
        name: "Confluence",
        description: "Create content, collaborate on work, and organize and share information.",
        logo: require('../img/confluence-logo.png')
    },
    {
        name: "Dovetail",
        description: "Organize and tag your research in a collaborative platform.",
        logo: require('../img/dovetail-logo.png')
    }
]

export default function Home() {
    return (
        <div className='home-container'>
            <p className='title'>Connect your favorite tools.</p>
            
            <div className='home-app-cards'>
                {apps.map((app) =>
                    <Card app={app} />
                )}
            </div>

            <div className='home-buttons'>
                <button className='back-button' onClick={() => alert("Back button clicked")}>Back</button>
                <button className='finish-button' onClick={() => alert("Finish button clicked")}>Finish</button>
            </div>
        </div>
    )
}