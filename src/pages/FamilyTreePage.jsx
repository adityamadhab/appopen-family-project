// src/pages/FamilyTreePage.jsx
import { useState } from 'react';
import FamilyTree from '../components/FamilyTree';

function FamilyTreePage() {
    // Sample data for the family tree
    const [elements, setElements] = useState([
        {
            id: '1',
            data: { label: 'You' },
            position: { x: 250, y: 0 },
        },
        // Add more nodes and edges
    ]);

    return (
        <div className="h-screen">
            <FamilyTree elements={elements} />
        </div>
    );
}

export default FamilyTreePage;
