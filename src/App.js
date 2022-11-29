import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Cards2 from "./components/Cards2"

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users)

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
      <h1>Me apague quando for iniciar!</h1>
      <p>Chame o Card aqui!</p>
      <Flex gap={"16px"} wrap={"wrap"}>
        {users && 
          users.map((user) => {
          return <Cards2 user = {user} key={user.id}/>
        })}
      </Flex>
    </ChakraProvider>
  );
}
