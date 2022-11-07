# ECDSAOffsetRecovery









## Methods

### ecOffsetRecover

```solidity
function ecOffsetRecover(bytes32 hash, bytes signature, uint256 offset) external pure returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| hash | bytes32 | undefined |
| signature | bytes | undefined |
| offset | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getAddOwnerHash

```solidity
function getAddOwnerHash(uint256 proposalIndex, address owner, bool weight) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalIndex | uint256 | undefined |
| owner | address | undefined |
| weight | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getChangeOwnerWeightHash

```solidity
function getChangeOwnerWeightHash(uint256 proposalIndex, address owner, bool weight) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalIndex | uint256 | undefined |
| owner | address | undefined |
| weight | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getDeleteOwnerHash

```solidity
function getDeleteOwnerHash(uint256 proposalIndex, address owner) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalIndex | uint256 | undefined |
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getSetMinQuorumHash

```solidity
function getSetMinQuorumHash(uint256 proposalIndex, uint256 quorum) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalIndex | uint256 | undefined |
| quorum | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getSwitchTokenHash

```solidity
function getSwitchTokenHash(uint256 proposalIndex, address token, bool enableStatus, address[] tokenToUSdPath) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalIndex | uint256 | undefined |
| token | address | undefined |
| enableStatus | bool | undefined |
| tokenToUSdPath | address[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### toEthSignedMessageHash

```solidity
function toEthSignedMessageHash(bytes32 hash) external pure returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| hash | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |




