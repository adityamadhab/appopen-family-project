import React, { useState } from 'react';
import Tree from 'react-d3-tree';

function FamilyTreePage() {
    const [hoveredPerson, setHoveredPerson] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    

    // Define the hierarchical structure for the family tree
    const familyTreeData = [
        {
            name: 'You',
            attributes: { aadhar: '1234-5678-9012' },
            children: [
                {
                    name: 'Father',
                    attributes: { aadhar: '2345-6789-0123' },
                    children: [
                        {
                            name: 'Grandfather (Paternal)',
                            attributes: { aadhar: '5678-9012-3456' },
                        },
                        {
                            name: 'Grandmother (Paternal)',
                            attributes: { aadhar: '6789-0123-4567' },
                        },
                    ],
                },
                {
                    name: 'Mother',
                    attributes: { aadhar: '3456-7890-1234' },
                    children: [
                        {
                            name: 'Grandfather (Maternal)',
                            attributes: { aadhar: '7890-1234-5678' },
                        },
                        {
                            name: 'Grandmother (Maternal)',
                            attributes: { aadhar: '8901-2345-6789' },
                        },
                    ],
                },
                {
                    name: 'Sibling',
                    attributes: { aadhar: '4567-8901-2345' },
                },
            ],
        },
    ];

    const handleNodeMouseEnter = (nodeDatum, evt) => {
        setHoveredPerson(nodeDatum);
        setTooltipPosition({ x: evt.pageX + 10, y: evt.pageY + 10 }); // Dynamically set position near the node
    };

    const handleNodeMouseLeave = () => {
        setHoveredPerson(null);
    };

    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className='text-2xl font-bold mb-4'>Your Family Tree</h1>
            <div className="tree-container w-full h-[calc(100vh-100px)] relative">
                <Tree
                    data={familyTreeData}
                    translate={{ x: window.innerWidth / 2, y: 50 }}
                    orientation="vertical"
                    pathFunc="diagonal"
                    separation={{ siblings: 1.5, nonSiblings: 2 }}
                    centeringTransitionDuration={800}
                    zoom={0.8}
                    renderCustomNodeElement={({ nodeDatum, toggleNode }, evt) => (
                        <g>
                            <circle
                                r={20}
                                fill="orange"
                                onMouseEnter={(e) => handleNodeMouseEnter(nodeDatum, e)}
                                onMouseLeave={handleNodeMouseLeave}
                            />
                            <text
                                fill="black"
                                strokeWidth="1"
                                x="30"
                                y="5"
                                style={{ fontSize: '12px' }}
                            >
                                {nodeDatum.name}
                            </text>
                        </g>
                    )}
                />
            </div>

            {/* Tooltip for showing details on hover */}
            {hoveredPerson && (
                <div
                    className="absolute bg-white p-2 shadow-lg rounded border border-gray-300 text-sm"
                    style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
                >
                    <p><strong>Name:</strong> {hoveredPerson.name}</p>
                    <p><strong>Aadhar Number:</strong> {hoveredPerson.attributes.aadhar}</p>
                </div>
            )}
        </div>
    );
}

export default FamilyTreePage;
