export default function handler(req, res) {
    const tokenId = req.query.tokenId;
    const imageUrl =
        'https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/';

    res.status(200).json({
        name: 'Crypto HB Dev #' + tokenId,
        description: 'Crypto HB Dev is a collection of developers in crypto',
        image: imageUrl + tokenId + '.svg',
    });
}
