import './App.css';
import PullUpPure from './components/PullUpPure';


export default function AppPure(props) {
  return (
    <div>
      <PullUpPure counter={11}/>
      <PullUpPure counter={11}/>
      <PullUpPure counter={12}/>
    </div>
  );
}