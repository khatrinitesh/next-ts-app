"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

// Define the expected data structure based on your API
interface Data {
    [key: string]: {
        added: string;
        preferred: string;
        versions: {
            [version: string]: {
                added: string;
                info: {
                    description: string;
                    title: string;
                    version: string;
                    "x-apisguru-categories": string[];
                    "x-logo"?: {
                        url: string;
                    };
                    "x-origin": {
                        format: string;
                        url: string;
                        version: string;
                    }[];
                    "x-providerName": string;
                    "x-serviceName"?: string;
                };
                updated: string;
                swaggerUrl: string;
                swaggerYamlUrl: string;
                openapiVer: string;
                link: string;
            };
        };
    };
}


const AppFetchData = () => {
    const [data, setData] = useState<Data | null>(null); // Initialize with null
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    const apiUrl = process.env.NEXT_PUBLIC_API_GURU;

    // Function to fetch data from API
    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            if (!apiUrl) throw new Error("API URL is not defined");

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Sorry, something went wrong. Status: ${response.status}`);
            }

            const finalData = await response.json();
            setData(finalData);
            console.log(finalData); // Log data for debugging

        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [apiUrl]);
  return (
    <>
         {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data ? (
                <div>
                    <h1>API Data</h1>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <h2>{key}</h2>
                            <p><strong>Added:</strong> {value.added}</p>
                            <p><strong>Preferred:</strong> {value.preferred}</p>
                            {Object.entries(value.versions).map(([version, versionData]) => (
                                <div key={version}>
                                    <h3>Version: {version}</h3>
                                    <p><strong>Description:</strong> {versionData.info.description}</p>
                                    <p><strong>Title:</strong> {versionData.info.title}</p>
                                    <p><strong>Version:</strong> {versionData.info.version}</p>
                                    <p><strong>OpenAPI Version:</strong> {versionData.openapiVer}</p>
                                    <a href={versionData.link} target="_blank" rel="noopener noreferrer">API Link</a>
                                    {versionData.info["x-logo"] && <Image src={versionData.info["x-logo"].url} alt="Logo" />}
                                    <div>
                                        {versionData.info["x-origin"].map((origin, index) => (
                                            <div key={index}>
                                                <p><strong>Origin Format:</strong> {origin.format}</p>
                                                <p><strong>Origin URL:</strong> <a href={origin.url} target="_blank" rel="noopener noreferrer">{origin.url}</a></p>
                                                <p><strong>Origin Version:</strong> {origin.version}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p>No data available.</p> // Show this if data is null and not loading
            )}
    </>
  )
}

export default AppFetchData