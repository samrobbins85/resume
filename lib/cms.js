async function fetchAPI(query, { variables } = {}) {
	const res = await fetch("https://graphql.datocms.com/preview", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});
	const json = await res.json();

	if (json.errors) {
		throw new Error("Failed to fetch API");
	}

	return json.data;
}

export default async function getData() {
	const data = await fetchAPI(`
    {
        cv {
          name
          linkedin
          github
          email
          website
          languages
          librariesAndFrameworks
          software
          platforms
		  education {
			institution
			qualification
			duration
			description {
			  value
			}
		  }
		  experience {
			role
			duration
			description
			company
		  }
		  project {
			name
			link
			description
			date
		  }
        }
      }
    `);
	return data.cv;
}
