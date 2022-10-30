// eslint-disable-next-line import/no-anonymous-default-export
export default (client) => ({
    fetchTweetData: ({ provider, startDate, endDate }) => client.get(`http://localhost:5000/api/fix_tweet/provider/${provider}/periode/${startDate}/${endDate}`),
    fetchSentimenData: ({ provider, startDate, endDate }) => client.get(`http://localhost:5000/api/fix_sentimen/provider/${provider}/periode/${startDate}/${endDate}`),
    fetchKataData: ({ provider, startDate, endDate }) => client.get(`http://localhost:5000/api/fix_kata/provider/${provider}/periode/${startDate}/${endDate}`),
})