// src/components/FamilyTree.jsx
import ReactFlow, { Controls, MiniMap, Background } from 'reactflow';
import 'reactflow/dist/style.css';

function FamilyTree({ elements }) {
    return (
        <div className="h-full">
            <ReactFlow elements={elements} zoomOnScroll={false} nodesDraggable={false}>
                <Controls />
                <MiniMap />
                <Background />
            </ReactFlow>
        </div>
    );
}

export default FamilyTree;
