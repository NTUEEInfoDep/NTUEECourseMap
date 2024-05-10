import './App.css'
import RelationGraph from './components/RelationGraph'

const defaultNodes = [
  { id: 'main', type: 'custom', position: { x: 320, y: 120 }, data: { label: 'the course' }},
  { id: 'pre-0', type: 'custom', position: { x: 20, y: 20 }, data: { label: 'calculus' }},
  { id: 'pre-1', type: 'custom', position: { x: 20, y: 120 }, data: { label: 'physics' }},
  { id: 'pre-2', type: 'custom', position: { x: 20, y: 220 }, data: { label: 'coding' }},
  { id: 'nxt-0', type: 'custom', position: { x: 620, y: 20 }, data: { label: 'Web Programming' }},
  { id: 'nxt-1', type: 'custom', position: { x: 620, y: 220 }, data: { label: 'CNS' }},
];

const defaultEdges = [
  { id: 'p0', source: 'pre-0', target: 'main' },
  { id: 'p1', source: 'pre-1', target: 'main' },
  { id: 'p2', source: 'pre-2', target: 'main' },
  { id: 'n0', source: 'main', target: 'nxt-0' },
  { id: 'n1', source: 'main', target: 'nxt-1' },
];

function App() {
  return (
    <>
      <div>
        <RelationGraph initNodes={defaultNodes} initEdges={defaultEdges}/>
      </div>
    </>
  )
}

export default App