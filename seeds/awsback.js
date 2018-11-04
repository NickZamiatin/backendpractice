exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('awsback').del()
    .then(function () {
      // Inserts seed entries
      return knex('awsback').insert([

        {
          id: 1,
          title: "635 W 42nd St",
          description: "The Atelier Rental Office is showing 7 days a week. Call us today for an immediate appointment to see our newest availability",
          url: "https://photos.zillowstatic.com/p_h/ISushxtml61j771000000000.jpg"
        },
        {
          id: 2,
          title: "325 W 45th St APT 301 New York NY 10036",
          description: "What a great opportunity to own a spacious and light-filled one-bedroom oasis located steps from Times Square.",
          url: "https://photos.zillowstatic.com/p_h/ISa5yehqsbe1nt1000000000.jpg"
        },
        {
          id: 3,
          title: "323 W 43rd St APT 2FW New York, NY 10036",
          description: "PRICED TO SELL. This charming one bedroom apartment with a flexible layout is located on the second floor of an impeccably maintained building with a handsome brick townhouse-like facade. ",
          url: "https://photos.zillowstatic.com/p_h/ISmmjgqr53kmxf1000000000.jpg"
        },
        {
          id: 4,
          title: "454 W 46th St # PH7AS",
          description: "This Heavenly penthouse in Hells Kitchen boasts one of the most unique and largest private terraces in all of Manhattan",
          url: "https://photos.zillowstatic.com/p_h/IS2r90gjlpvxhd1000000000.jpg"
        },
        {
          id: 5,
          title: "350 W 53rd St # PHE",
          description: "Penthouse + Terrace Bragging Rights Revel in owning the largest private outdoor space in Midtown West!",
          url: "https://photos.zillowstatic.com/p_h/ISatk8m7l3kaxw1000000000.jpg"
        },
        {
          id: 6,
          title: "352 W 48th St APT 1FW",
          description: "Move right into this cozy one bedroom apartment with 10 foot ceiling height, on a beautiful tree-lined street in Clinton/Hell's Kitchen.",
          url: "https://photos.zillowstatic.com/p_h/ISqlpf6aert6wq1000000000.jpg"
        },
        {
          id: 7,
          title: "319 E 50th St APT 9L",
          description: "Welcome home to your newly renovated prewar studio! This spacious home has a gracious entry foyer, a large living space, beautiful hardwood oak floors and prewar character. ",
          url: "https://photos.zillowstatic.com/p_h/ISalee4m6zch400000000000.jpg"
        }

      ]);
    });
};