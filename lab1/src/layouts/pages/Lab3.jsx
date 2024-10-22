import Flex from '../../components/FlexContainer';

function Lab3(){
    const data = [
        {
          name: "Ala",
          id: 1
        },
        {
          name: "Ela",
          id: 2
        },
        {
          name: "Karol",
          id: 3
        },
        {
          name: "Ola",
          id: 4
        },
        {
            name: "Monika",
            id: 5
        },
        {
            name: "Robert",
            id: 6
        }
        ];

    return(
        <>
        <Flex elements={data}/>
        </>
    )
}

export default Lab3;