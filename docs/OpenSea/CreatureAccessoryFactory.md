# CreatureAccessoryFactory



> CreatureAccessoryFactory CreatureAccessory - a factory contract for Creature Accessory semi-fungible tokens.





## Methods

### BASIC_LOOTBOX

```solidity
function BASIC_LOOTBOX() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### GOLD_LOOTBOX

```solidity
function GOLD_LOOTBOX() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### NUM_LOOTBOX_OPTIONS

```solidity
function NUM_LOOTBOX_OPTIONS() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### NUM_OPTIONS

```solidity
function NUM_OPTIONS() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### PREMIUM_LOOTBOX

```solidity
function PREMIUM_LOOTBOX() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address _owner, uint256 _optionId) external view returns (uint256)
```

Get the factory&#39;s ownership of Option. Should be the amount it can still mint. NOTE: Called by `canMint`



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |
| _optionId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### canMint

```solidity
function canMint(uint256 _optionId, uint256 _amount) external view returns (bool)
```



*Returns whether the option ID can be minted. Can return false if the developer wishes to restrict a total supply per option ID (or overall).*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _optionId | uint256 | undefined |
| _amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### factorySchemaName

```solidity
function factorySchemaName() external pure returns (string)
```

Indicates the Wyvern schema name for assets in this lootbox, e.g. &quot;ERC1155&quot;




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### lootBoxAddress

```solidity
function lootBoxAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### mint

```solidity
function mint(uint256 _optionId, address _toAddress, uint256 _amount, bytes _data) external nonpayable
```



*Mints asset(s) in accordance to a specific address with a particular &quot;option&quot;. This should be callable only by the contract owner or the owner&#39;s Wyvern Proxy (later universal login will solve this). Options should also be delineated 0 - (numOptions() - 1) for convenient indexing.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _optionId | uint256 | the option id |
| _toAddress | address | address of the future owner of the asset(s) |
| _amount | uint256 | amount of the option to mint |
| _data | bytes | Extra data to pass during safeTransferFrom |

### name

```solidity
function name() external pure returns (string)
```

Returns the name of this factory.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### nftAddress

```solidity
function nftAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### numOptions

```solidity
function numOptions() external pure returns (uint256)
```

Number of options the factory supports.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### proxyRegistryAddress

```solidity
function proxyRegistryAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### supportsFactoryInterface

```solidity
function supportsFactoryInterface() external pure returns (bool)
```

Indicates that this is a factory contract. Ideally would use EIP 165 supportsInterface()




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external pure returns (string)
```

Returns the symbol for this factory.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

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
function uri(uint256 _optionId) external pure returns (string)
```



*Returns a URL specifying some metadata about the option. This metadata can be of the same structure as the ERC1155 metadata.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _optionId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



