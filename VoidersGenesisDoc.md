# VoidersGenesis



> VoidersGenesis is ERC721Tradable-compatible contract.





## Methods


### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```



*Approves another address to transfer the given token ID. The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```

*Returns the number of tokens owned by `owner`. `owner` must be a valid address, or the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### baseTokenURI

```solidity
function baseTokenURI() external view returns (string)
```



*Returns baseTokenURI.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### changeBaseTokenURI

```solidity
function changeBaseTokenURI(string _newBaseTokenURI) external nonpayable
```



*Changes baseTokenURI.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newBaseTokenURI | string | new URI for all tokens |

### changeContractURI

```solidity
function changeContractURI(string _newContractURI) external nonpayable
```



*Changes baseTokenURI. Only owner can execute.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newContractURI | string | new URI for all tokens |

### contractURI

```solidity
function contractURI() external view returns (string)
```



*Returns contractURI.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |


### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*See {IERC721-getApproved}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



### getNonce

```solidity
function getNonce(address user) external view returns (uint256 nonce)
```


#### Parameters

| Name | Type | Description |
|---|---|---|
| user | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| nonce | uint256 | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```

Override isApprovedForAll to whitelist user&#39;s OpenSea proxy accounts to enable gas-less listings.



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### maxTotalSupply

```solidity
function maxTotalSupply() external view returns (uint256)
```


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mintTo

```solidity
function mintTo(address _to) external nonpayable
```



*Mints a token to an address with a tokenURI.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | address of the future owner of the token |

### mintedFromWhitelist

```solidity
function mintedFromWhitelist(address) external view returns (bool)
```

*Returns true if the address minted token from whitelst.*



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### name

```solidity
function name() external view returns (string)
```



*Returns token name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerMintForSell

```solidity
function ownerMintForSell() external nonpayable
```



*Mints the rest of the tokens to owner for selling.*


### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*Returns owner of 'tokenId'*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### presaleEndTime

```solidity
function presaleEndTime() external view returns (uint128)
```
*Returns presale end time in UNIX.*

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### presaleMint

```solidity
function presaleMint(bytes signature) external payable
```



*Mints a token to an approved address with discount.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| signature | bytes | of whitelisted address from whitelist checker |

### presalePrice

```solidity
function presalePrice() external view returns (uint256)
```
*Returns presale price in wei.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### presaleStartTime

```solidity
function presaleStartTime() external view returns (uint128)
```
*Returns presale start time in UNIX.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |


### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC721-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*See {IERC721Metadata-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### testChangePresalePrice

```solidity
function testChangePresalePrice(uint256 _newPrice) external nonpayable
```
*Changes presale price for testing purposes.*


#### Parameters

| Name | Type | Description |
|---|---|---|
| _newPrice | uint256 | undefined |

### testEndPresale

```solidity
function testEndPresale() external nonpayable
```
*Ends presale for testing purposes.*



### testMintTo

```solidity
function testMintTo(address _to) external nonpayable
```

*Mints token to `_to` address, only for test.*


#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |

### testStartPresale

```solidity
function testStartPresale() external nonpayable
```
*Starts presale for testing purposes.*





### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```



*Returns URI for exact token. It's not depends on `_tokenId` param.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | uint256 ID of the token to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*Returns the total tokens minted so far. 1 is always subtracted from the Counter since it tracks the next available tokenId.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-transferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### whitelistChecker

```solidity
function whitelistChecker() external view returns (address)
```

*Returns address of backend, that can approves presale mint.*

HOW TO SIGN: 

```typescript
    const user = "0x1234567890123456789012345678901234567890"; // get address from frontend
    const signer = await ethers.getSigner("signerAddress"); // get signer from backend
    const hash = ethers.utils.solidityKeccak256(
        ["address"],
        [signerAddress]
    );
    const sign = await signer.signMessage(ethers.utils.arrayify(hash));
```


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### MetaTransactionExecuted

```solidity
event MetaTransactionExecuted(address userAddress, address payable relayerAddress, bytes functionSignature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| userAddress  | address | undefined |
| relayerAddress  | address payable | undefined |
| functionSignature  | bytes | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



