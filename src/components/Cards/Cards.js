import './Cards.css'
import PillBotton from './PillBotton';
function Cards(){
    return (
        <section className="Cards">
            <h2>Title</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati atque aliquam? Quia libero, nihil possimus minus ad doloremque deserunt deleniti aut quae dolor, est distinctio quis placeat? Aspernatur, laboriosam.
            </p>
            <div>
                <PillBotton text="Acción A" type="submit" click={(e) => { alert("Click A");}}></PillBotton>
                <PillBotton text="Acción B" type="submit" click={(e) => { alert("Click B"); }}></PillBotton>
            </div>
        </section>
    );
}

export default Cards;