# ERC1155Tradable



> ERC1155Tradable ERC1155Tradable - ERC1155 contract that whitelists an operator address, has create and mint functionality, and supports useful standards from OpenZeppelin, like _exists(), name(), symbol(), and totalSupply()





## Methods

### ERC712_VERSION

```solidity
function ERC712_VERSION() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### balanceOf

```solidity
function balanceOf(address account, uint256 id) external view returns (uint256)
```



*See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |
| id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) external view returns (uint256[])
```



*See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| accounts | address[] | undefined |
| ids | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### batchMint

```solidity
function batchMint(address _to, uint256[] _ids, uint256[] _quantities, bytes _data) external nonpayable
```



*Mint tokens for each id in _ids*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | The address to mint tokens to |
| _ids | uint256[] | Array of ids to mint |
| _quantities | uint256[] | Array of amounts of tokens to mint per id |
| _data | bytes | Data to pass if receiver is contract |

### create

```solidity
function create(address _initialOwner, uint256 _id, uint256 _initialSupply, string _uri, bytes _data) external nonpayable returns (uint256)
```



*Creates a new token type and assigns _initialSupply to an address NOTE: remove onlyOwner if you want third parties to create new tokens on       your contract (which may change your IDs) NOTE: The token id must be passed. This allows lazy creation of tokens or       creating NFTs by setting the id&#39;s high bits with the method       described in ERC1155 or to use ids representing values other than       successive small integers. If you wish to create ids as successive       small integers you can either subclass this class to count onchain       or maintain the offchain cache of identifiers recommended in       ERC1155 and calculate successive ids from that.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _initialOwner | address | address of the first owner of the token |
| _id | uint256 | The id of the token to create (must not currenty exist). |
| _initialSupply | uint256 | amount to supply the first owner |
| _uri | string | Optional URI for this token type |
| _data | bytes | Data to pass if receiver is contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The newly created token ID |

### creators

```solidity
function creators(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### executeMetaTransaction

```solidity
function executeMetaTransaction(address userAddress, bytes functionSignature, bytes32 sigR, bytes32 sigS, uint8 sigV) external payable returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| userAddress | address | undefined |
| functionSignature | bytes | undefined |
| sigR | bytes32 | undefined |
| sigS | bytes32 | undefined |
| sigV | uint8 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### exists

```solidity
function exists(uint256 _id) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### getChainId

```solidity
function getChainId() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getDomainSeperator

```solidity
function getDomainSeperator() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

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
function isApprovedForAll(address _owner, address _operator) external view returns (bool isOperator)
```

Override isApprovedForAll to whitelist user&#39;s OpenSea proxy accounts to enable gas-free listings.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |
| _operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| isOperator | bool | undefined |

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _quantity, bytes _data) external nonpayable
```



*Mints some amount of tokens to an address*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | Address of the future owner of the token |
| _id | uint256 | Token ID to mint |
| _quantity | uint256 | Amount of tokens to mint |
| _data | bytes | Data to pass if receiver is contract |

### name

```solidity
function name() external view returns (string)
```






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

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) external nonpayable
```



*See {IERC1155-safeBatchTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| ids | uint256[] | undefined |
| amounts | uint256[] | undefined |
| data | bytes | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) external nonpayable
```



*See {IERC1155-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| id | uint256 | undefined |
| amount | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC1155-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### setCreator

```solidity
function setCreator(address _to, uint256[] _ids) external nonpayable
```



*Change the creator address for given tokens*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | Address of the new creator |
| _ids | uint256[] | Array of Token IDs to change creator |

### setCustomURI

```solidity
function setCustomURI(uint256 _tokenId, string _newURI) external nonpayable
```



*Will update the base URI for the token*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | The token to update. _msgSender() must be its creator. |
| _newURI | string | New URI for the token. |

### setURI

```solidity
function setURI(string _newURI) external nonpayable
```



*Sets a new URI for all token types, by relying on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newURI | string | New URI for all tokens |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenSupply

```solidity
function tokenSupply(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalSupply

```solidity
function totalSupply(uint256 _id) external view returns (uint256)
```



*Returns the total quantity for a token ID*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _id | uint256 | uint256 ID of the token to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | amount of token in existence |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### uri

```solidity
function uri(uint256 _id) external view returns (string)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |



## Events

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed account, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
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

### TransferBatch

```solidity
event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| ids  | uint256[] | undefined |
| values  | uint256[] | undefined |

### TransferSingle

```solidity
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| id  | uint256 | undefined |
| value  | uint256 | undefined |

### URI

```solidity
event URI(string value, uint256 indexed id)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| value  | string | undefined |
| id `indexed` | uint256 | undefined |



