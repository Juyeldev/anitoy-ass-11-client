import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Navbar />
            <div className='  my-8 '>
                <h2 className='text-6xl my-5 font-bold text-center'>Blog Post</h2>
                <div className='bg-custom-navy rounded mx-auto text-white p-8'>
                    <h3 className='text-4xl my-4'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>
                    <p className='text-2xl mb-4'>Access Token: An access token is a credential that is issued to a user after successful authentication. It contains information about the user's identity and permissions, and it has a limited lifespan. The access token is typically included in the authorization header of API requests to authenticate the user and grant access to protected resources. It serves as proof of the user's identity and authorization for a specific period. <br />
                    </p>
                    <p className='text-2xl mb-4'>
                        Refresh Token: A refresh token is a long-lived credential that is issued alongside the access token. It is used to obtain a new access token once the previous one expires. The refresh token is usually sent to the server in exchange for a new access token. Unlike access tokens, refresh tokens have a longer lifespan and are used to maintain a continuous session without requiring the user to reauthenticate frequently.

                    </p>
                    <p className='text-2xl mb-4'>
                        Memory Storage: Tokens can be stored in memory variables within the client application. However, this method has limitations as the tokens will be lost if the user refreshes the page or closes the application.
                    </p>
                    <p className='text-2xl my-4'>
                        Browser Storage (Local Storage or Session Storage): Tokens can be stored in the browser's local storage or session storage. These storage mechanisms provide persistence across page refreshes and allow easy access to tokens. However, they are vulnerable to cross-site scripting (XSS) attacks, where malicious scripts can access the tokens if not properly protected.
                    </p>
                </div>

                <div className='bg-custom-navy rounded mx-auto my-8 text-white p-8'>
                    <h3 className='text-4xl my-4'>2.Compare SQL and NoSQL databases?
                    </h3>
                    <p className='text-3xl my-7'># SQL Databases:</p>
                    <p className='text-2xl mb-4'>Structure: SQL databases are based on a structured schema that defines the tables, columns, and relationships between them. They follow a rigid structure and enforce data integrity through the use of constraints, such as primary keys and foreign keys.
                    </p>
                    <p className='text-2xl mb-4'>
                        Data Model: SQL databases use a relational data model, where data is organized into tables with rows and columns. The relationships between tables are defined by foreign keys.

                    </p>
                    <p className='text-2xl mb-4'>
                        Query Language: SQL databases use the SQL language to query and manipulate data. SQL provides a standardized way to perform complex queries using SELECT, INSERT, UPDATE, DELETE statements, and supports powerful features like joins and aggregate functions.
                    </p>
                    <p className='text-2xl my-4'>
                        ACID Compliance: SQL databases typically adhere to the ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity, transactional consistency, and durability.
                    </p>
                    <p className='text-3xl my-7'># NoSQL Databases:</p>

                    <p className='text-2xl my-4'>
                        Structure: NoSQL databases have a flexible schema, allowing for dynamic and unstructured data. The structure of data can vary from one document or collection to another.
                    </p>
                    <p className='text-2xl my-4'>
                        Data Model: NoSQL databases use various data models, such as key-value, document, columnar, or graph, depending on the specific database. Each data model offers different strengths and can be chosen based on the requirements of the application.
                    </p>
                    <p className='text-2xl my-4'>
                        Query Language: NoSQL databases often have their own query languages or APIs that are specific to the chosen data model. These query languages may not be as standardized as SQL but can still perform CRUD operations and complex queries
                    </p>
                    
                    <p className='text-2xl my-4'>
                        Flexibility and Agility: NoSQL databases provide flexibility to store and retrieve unstructured data, making them suitable for rapidly changing data requirements and agile development environments.
                    </p>

                    <Footer />
                </div>
                );
};

                export default Blog;