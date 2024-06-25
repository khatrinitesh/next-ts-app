"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {

    // Sample tree data
    const treeData = [
        {
            id: 1,
            name: 'Node 1',
            children: [
                {
                    id: 2,
                    name: 'Node 1.1'
                },
                {
                    id: 3,
                    name: 'Node 1.2',
                    children: [
                        {
                            id: 4,
                            name: 'Node 1.2.1'
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            name: 'Node 2'
        }
    ];
  return (
    <>
       <TreeViewComponent data={treeData}/>
    </>
  );
};

export default Example;

interface TreeNode {
    id: number;
    name: string;
    children?: TreeNode[];
}
interface TreeViewProps {
    data: TreeNode[];
}



const TreeViewComponent: React.FC<TreeViewProps> = ({data}) => {

    const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

    const toggleNode = (nodeId: number) => {
        if (expandedNodes.includes(nodeId)) {
            setExpandedNodes(expandedNodes.filter(id => id !== nodeId));
        } else {
            setExpandedNodes([...expandedNodes, nodeId]);
        }
    };

    const renderTree = (nodes: TreeNode[]) => {
        return nodes.map(node => (
            <div key={node.id} className="ml-4">
                <div className="flex items-center">
                    <button
                        className="flex items-center focus:outline-none"
                        onClick={() => toggleNode(node.id)}
                    >
                        {node.children && node.children.length > 0 && (
                            <span className="mr-2">
                                {expandedNodes.includes(node.id) ? (
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </span>
                        )}
                        <span className="text-gray-800">{node.name}</span>
                    </button>
                </div>
                {node.children && node.children.length > 0 && expandedNodes.includes(node.id) && (
                    <div className="ml-4">
                        {renderTree(node.children)}
                    </div>
                )}
            </div>
        ));
    };
    
  return (
    <> {renderTree(data)}
    </>
  );
};
