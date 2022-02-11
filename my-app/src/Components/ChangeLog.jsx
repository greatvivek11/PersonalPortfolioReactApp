import { useStore } from '../Store/Store';
import '../styles/changeLog.css';

function ChangeLog() {
    const { ChangeLogs } = useStore();

    return (
        <div className="ChangeLog">
            <h1>Change Log</h1>
            <ol className="changeLogs" type="1">
                {ChangeLogs?.ChangeLog?.map(
                    (log, i) => {
                        return (<li key={i}>{log}</li>)
                    }
                )}
            </ol>
        </div>
    )
}

export default ChangeLog;
