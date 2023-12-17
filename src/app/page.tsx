const users = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "Jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Owner",
    email: "cody.fisher@example.com",
  },
  {
    name: "Esther Howard",
    title: "Forward Response Developer",
    role: "Member",
    email: "esther.howard@example.com",
  },
  {
    name: "Jenny Wilson",
    title: "Central Security Manager",
    role: "Member",
    email: "jenny.wilson@example.com",
  },
  {
    name: "Kristin Watson",
    title: "Lead Implementation Liaison",
    role: "Admin",
    email: "kristin.watson@example.com",
  },
  {
    name: "Cameron Williamson",
    title: "Internal Applications Engineer",
    role: "Member",
    email: "cameron.williamson@very-long-domain-example.com",
  },
];

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 hidden md:flex md:flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="=inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="hidden sm:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="hidden sm:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* One table row for each user */}
                    {users.map((person) => (
                      <tr key={person.name}>
                        <td className="w-full max-w-0 truncate whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:pl-6 sm:max-w-none">
                          {person.name}
                          <dl className="font-normal lg:hidden">
                            <dt className="sr-only sm:hidden">Title</dt>
                            <dd className="mt-1 truncate text-gray-700 sm:hidden">
                              {person.title}
                            </dd>
                            <dt className="sr-only">Email</dt>
                            <dd className="mt-1 truncate text-gray-500 sm:text-gray-700">
                              {person.email}
                            </dd>
                          </dl>
                        </td>
                        <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                          {person.title}
                        </td>
                        <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.role}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card view up to the `md:` breakpoint */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
        {users.map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow ring-1 ring-black ring-opacity-5"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-3">
                <p className="truncate text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-700">
                {person.title}
              </p>
              <p className="mt-1 truncate text-sm text-gray-500">
                {person.email}
              </p>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-900"
            >
              Edit
              <span className="sr-only">, {person.name}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
