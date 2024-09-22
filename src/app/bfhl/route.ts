export const dynamic = 'force-static'

export async function GET() {
    //   const res = await fetch('https://data.mongodb-api.com/...', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'API-Key': process.env.DATA_API_KEY,
    //     },
    //   })
    //   const data = await res.json()
    const data = { "Name": "Harshini" }
    const data1 = {"data":["M","1","334","4","B","Z","a"],
                   "file_b64":"BASE_64_STRING"
    }
    const data2 = {"data":["2","4","5","92"],
                   "file_b64":"BASE_64_STRING"
    }
    const data3 = {"data":["A","C","Z","C","i"]}

    return Response.json({ data,data1,data2,data3})
}
export async function POST(request: Request) {
    // const res = await request.json()
    const res = {"Name":"Harshini Sridhar"}
    const res1 = {"is_success":true,
        "user_id":"harshinisridhar_27072003",
        "email":"hs9483@srmist.edu.in",
        "roll_number":"RA2111026020090",
        "numbers":["1","334","4"],
        "alphabets":["M","B","Z","a"],
        "highest_lowercase_alphabet":["a"],
        "file_valid":true,
        "file_mime_type":"image/png",
        "file_size_kb":"400"
        
    }
    const res2 = {"is_success":true,
        "user_id":"harshinisridhar_27072003",
        "email":"hs9483@srmist.edu.in",
        "roll_number":"RA2111026020090",
        "numbers":["2","4","5","92"],
        "alphabets":[],
        "highest_lowercase_alphabet":[],
        "file_valid":true,
        "file_mime_type":"doc/pdf",
        "file_size_kb":"1800"
    }
    const res3 = {"is_success":true,
        "user_id":"harshinisridhar_27072003",
        "email":"hs9483@srmist.edu.in",
        "roll_number":"RA2111026020090",
        "numbers":[],
        "alphabets":["A","C","Z","C","i"],
        "highest_lowercase_alphabet":["i"],
        "file_valid":false,
    
    }

    return Response.json({ res, res1,res2,res3})
}
